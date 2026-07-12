/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-current-12-175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cheese, Red Windsor",
  "nutritionPerBasis": {
    "calcium_mg": 690.0,
    "carbs_g": 0.0,
    "energy_kcal": 401.0,
    "fat_g": 33.7,
    "fibre_g": 0.0,
    "folate_ug": 32.0,
    "iron_mg": 0.2,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 450.0,
    "potassium_mg": 87.0,
    "protein_g": 24.4,
    "salt_g": 1.725,
    "sat_fat_g": 21.1,
    "sodium_mg": 690.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 374.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-175",
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
