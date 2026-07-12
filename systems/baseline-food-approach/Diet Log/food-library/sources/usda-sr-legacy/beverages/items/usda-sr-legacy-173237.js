/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "portion-amount-of-dry-mix-to-make-8-fl-oz-prepared",
  "description": "Beverages",
  "id": "usda-sr-legacy-173237",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "portion-amount-of-dry-mix-to-make-8-fl-oz-prepared",
      "kind": "unit",
      "label": "portion, amount of dry mix to make 8 fl oz prepared"
    }
  ],
  "name": "Beverages, Orange-flavor drink, breakfast type, low calorie, powder",
  "nutritionPerBasis": {
    "calcium_mg": 1380.0,
    "carbs_g": 85.9,
    "energy_kcal": 908.0,
    "fat_g": 0.0,
    "fibre_g": 3.8,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 275.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 629.0,
    "potassium_mg": 3130.0,
    "protein_g": 3.6,
    "salt_g": 0.2025,
    "sat_fat_g": 0.0,
    "sodium_mg": 81.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 6010.0,
    "vitamin_c_mg": 2400.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173237",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
