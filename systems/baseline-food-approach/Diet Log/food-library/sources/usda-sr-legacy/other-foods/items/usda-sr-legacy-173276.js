/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "sundae",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-173276",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "sundae",
      "kind": "unit",
      "label": "sundae"
    }
  ],
  "name": "Fast foods, sundae, hot fudge",
  "nutritionPerBasis": {
    "calcium_mg": 131.0,
    "carbs_g": 30.2,
    "energy_kcal": 753.0,
    "fat_g": 5.46,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.37,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 144.0,
    "potassium_mg": 250.0,
    "protein_g": 3.57,
    "salt_g": 0.2875,
    "sat_fat_g": 3.18,
    "sodium_mg": 115.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173276",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
