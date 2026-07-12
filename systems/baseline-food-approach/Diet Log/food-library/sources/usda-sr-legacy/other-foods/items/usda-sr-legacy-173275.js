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
  "id": "usda-sr-legacy-173275",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "sundae",
      "kind": "unit",
      "label": "sundae"
    }
  ],
  "name": "Fast foods, sundae, caramel",
  "nutritionPerBasis": {
    "calcium_mg": 122.0,
    "carbs_g": 31.8,
    "energy_kcal": 820.0,
    "fat_g": 5.98,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.14,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 205.0,
    "protein_g": 4.71,
    "salt_g": 0.315,
    "sat_fat_g": 2.91,
    "sodium_mg": 126.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173275",
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
