/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "package",
  "description": "Snacks",
  "id": "usda-sr-legacy-173146",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "package",
      "kind": "unit",
      "label": "package"
    }
  ],
  "name": "Snacks, granola bites, mixed flavors",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 66.3,
    "energy_kcal": 1890.0,
    "fat_g": 17.5,
    "fibre_g": 5.7,
    "folate_ug": 33.0,
    "iron_mg": 1.56,
    "magnesium_mg": 69.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 216.0,
    "potassium_mg": 285.0,
    "protein_g": 7.17,
    "salt_g": 0.4175,
    "sat_fat_g": 9.89,
    "sodium_mg": 167.0,
    "sugar_g": 30.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 2.51,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173146",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
