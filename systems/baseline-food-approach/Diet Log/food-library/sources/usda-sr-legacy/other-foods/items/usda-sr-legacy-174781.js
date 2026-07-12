/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174781",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON MULTIGRAIN CRUNCH BAR",
  "nutritionPerBasis": {
    "calcium_mg": 953.0,
    "carbs_g": 57.3,
    "energy_kcal": 1760.0,
    "fat_g": 13.2,
    "fibre_g": 2.8,
    "folate_ug": 727.0,
    "iron_mg": 14.7,
    "magnesium_mg": 255.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 455.0,
    "potassium_mg": 0.0,
    "protein_g": 18.5,
    "salt_g": 1.045,
    "sat_fat_g": 4.79,
    "sodium_mg": 418.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 3180.0,
    "vitamin_c_mg": 144.0,
    "vitamin_e_mg": 24.6,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174781",
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
