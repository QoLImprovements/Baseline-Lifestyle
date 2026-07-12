/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources and calculation from fresh",
  "id": "cofid-current-13-830",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Garlic powder",
  "nutritionPerBasis": {
    "calcium_mg": 65.0,
    "carbs_g": 42.7,
    "energy_kcal": 246.0,
    "fat_g": 1.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 3.9,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 1360.0,
    "protein_g": 18.7,
    "salt_g": 0.0475,
    "sat_fat_g": 0.2,
    "sodium_mg": 19.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-830",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
