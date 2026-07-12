/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-large-rectangular-piece-or-2-squares-or-4-small-rectangula",
  "description": "Cookies and brownies",
  "id": "usda-fndds-2708138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-large-rectangular-piece-or-2-squares-or-4-small-rectangula",
      "kind": "unit",
      "label": "1 large rectangular piece or 2 squares or 4 small rectangular pieces"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    }
  ],
  "name": "Graham crackers, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 429.0,
    "carbs_g": 78.0,
    "energy_kcal": 386.0,
    "fat_g": 5.71,
    "fibre_g": 5.7,
    "folate_ug": 80.0,
    "iron_mg": 3.09,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 163.0,
    "potassium_mg": 171.0,
    "protein_g": 5.71,
    "salt_g": 1.5725,
    "sat_fat_g": 0.0,
    "sodium_mg": 629.0,
    "sugar_g": 22.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708138",
  "state": "Unspecified",
  "subcategory": "Cookies and brownies",
  "tags": [
    "cookies-and-brownies",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
