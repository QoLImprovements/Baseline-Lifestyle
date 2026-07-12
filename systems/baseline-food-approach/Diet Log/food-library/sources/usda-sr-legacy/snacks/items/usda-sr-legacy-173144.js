/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 47.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, granola bar, KASHI GOLEAN, crunchy, mixed flavors",
  "nutritionPerBasis": {
    "calcium_mg": 434.0,
    "carbs_g": 59.6,
    "energy_kcal": 393.0,
    "fat_g": 9.23,
    "fibre_g": 5.9,
    "folate_ug": 215.0,
    "iron_mg": 5.2,
    "magnesium_mg": 86.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 263.0,
    "potassium_mg": 300.0,
    "protein_g": 17.9,
    "salt_g": 1.215,
    "sat_fat_g": 4.69,
    "sodium_mg": 486.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 10.3,
    "vitamin_k_ug": 1.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173144",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
