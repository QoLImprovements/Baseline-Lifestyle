/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "cracker-rectangular",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "cracker-rectangular",
      "kind": "unit",
      "label": "cracker, rectangular"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "cup-bite-size",
      "kind": "unit",
      "label": "cup, bite size"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "cracker-oval",
      "kind": "unit",
      "label": "cracker, oval"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "cracker-round",
      "kind": "unit",
      "label": "cracker, round"
    }
  ],
  "name": "Crackers, standard snack-type, regular, low salt",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 61.0,
    "energy_kcal": 2100.0,
    "fat_g": 25.3,
    "fibre_g": 1.6,
    "folate_ug": 90.0,
    "iron_mg": 3.6,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 228.0,
    "potassium_mg": 355.0,
    "protein_g": 7.4,
    "salt_g": 0.54,
    "sat_fat_g": 3.78,
    "sodium_mg": 216.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.03,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175058",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
