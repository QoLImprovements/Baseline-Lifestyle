/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-847",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pepper, cayenne, ground",
  "nutritionPerBasis": {
    "calcium_mg": 150.0,
    "carbs_g": 31.7,
    "energy_kcal": 318.0,
    "fat_g": 17.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 34.1,
    "magnesium_mg": 150.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 290.0,
    "potassium_mg": 2010.0,
    "protein_g": 12.0,
    "salt_g": 0.075,
    "sat_fat_g": 2.6,
    "sodium_mg": 30.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6135.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-847",
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
