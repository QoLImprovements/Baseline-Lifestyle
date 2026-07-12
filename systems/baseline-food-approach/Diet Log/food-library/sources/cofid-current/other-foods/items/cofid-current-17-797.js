/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-17-797",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Guacamole, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 2.2,
    "energy_kcal": 128.0,
    "fat_g": 12.7,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 0.33,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 364.0,
    "protein_g": 1.4,
    "salt_g": 0.0125,
    "sat_fat_g": 2.67,
    "sodium_mg": 5.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 13.0,
    "vitamin_e_mg": 2.23,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-797",
  "state": "Unspecified",
  "subcategory": "WC",
  "tags": [
    "other-foods",
    "unspecified",
    "wc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
