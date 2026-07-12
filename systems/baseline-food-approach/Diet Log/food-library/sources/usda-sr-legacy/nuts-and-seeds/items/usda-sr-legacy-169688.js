/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-169688",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Snacks, KELLOGG, KELLOGG'S Low Fat Granola Bar, Crunchy Almond/Brown Sugar",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 78.0,
    "energy_kcal": 390.0,
    "fat_g": 7.4,
    "fibre_g": 6.2,
    "folate_ug": 0.0,
    "iron_mg": 8.6,
    "magnesium_mg": 87.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 248.0,
    "potassium_mg": 249.0,
    "protein_g": 8.0,
    "salt_g": 0.7275,
    "sat_fat_g": 1.1,
    "sodium_mg": 291.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 713.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169688",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "nuts-and-seeds",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
