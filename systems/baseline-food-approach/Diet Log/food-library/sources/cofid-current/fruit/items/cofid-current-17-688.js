/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "8 samples, 4 flavours",
  "id": "cofid-current-17-688",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Jam, stone fruit",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 69.3,
    "energy_kcal": 261.0,
    "fat_g": 0.0,
    "fibre_g": 1.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 67.0,
    "protein_g": 0.4,
    "salt_g": 0.115,
    "sat_fat_g": 0.0,
    "sodium_mg": 46.0,
    "sugar_g": 69.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-688",
  "state": "Unspecified",
  "subcategory": "SC",
  "tags": [
    "fruit",
    "sc",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
