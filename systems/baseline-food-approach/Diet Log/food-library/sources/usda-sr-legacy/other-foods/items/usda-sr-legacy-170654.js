/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-5-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-170654",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-5-oz",
      "kind": "unit",
      "label": "1.5 oz"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Snacks, trail mix, regular, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 78.0,
    "carbs_g": 44.9,
    "energy_kcal": 1930.0,
    "fat_g": 29.4,
    "fibre_g": 0.0,
    "folate_ug": 71.0,
    "iron_mg": 3.05,
    "magnesium_mg": 158.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 345.0,
    "potassium_mg": 685.0,
    "protein_g": 13.8,
    "salt_g": 0.025,
    "sat_fat_g": 5.55,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170654",
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
