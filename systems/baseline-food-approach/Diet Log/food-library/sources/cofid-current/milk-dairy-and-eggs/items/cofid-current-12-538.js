/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "20 samples, including Philadelphia light and own brands",
  "id": "cofid-current-12-538",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, spreadable, medium fat, soft, white",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 3.5,
    "energy_kcal": 153.0,
    "fat_g": 11.2,
    "fibre_g": 0.0,
    "folate_ug": 30.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 129.0,
    "potassium_mg": 120.0,
    "protein_g": 9.8,
    "salt_g": 0.675,
    "sat_fat_g": 7.35,
    "sodium_mg": 270.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 163.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-538",
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
