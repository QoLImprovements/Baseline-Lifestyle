/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, including Philadelphia and own brands",
  "id": "cofid-current-12-551",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, spreadable, full fat, soft, white",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 3.0,
    "energy_kcal": 252.0,
    "fat_g": 24.4,
    "fibre_g": 0.0,
    "folate_ug": 23.0,
    "iron_mg": 0.0,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 89.0,
    "protein_g": 5.3,
    "salt_g": 0.65,
    "sat_fat_g": 15.97,
    "sodium_mg": 260.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 236.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 4.7
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-551",
  "state": "Unspecified",
  "subcategory": "BL",
  "tags": [
    "bl",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
