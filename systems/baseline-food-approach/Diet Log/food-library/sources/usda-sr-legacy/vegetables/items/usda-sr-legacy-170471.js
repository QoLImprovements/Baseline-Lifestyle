/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-33-package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170471",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 1134.0,
      "key": "pack-2-1-2-lb",
      "kind": "unit",
      "label": "pack (2-1/2 lb)"
    }
  ],
  "name": "Vegetables, mixed, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 13.5,
    "energy_kcal": 72.0,
    "fat_g": 0.52,
    "fibre_g": 4.0,
    "folate_ug": 29.0,
    "iron_mg": 0.95,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 212.0,
    "protein_g": 3.33,
    "salt_g": 0.1175,
    "sat_fat_g": 0.098,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 254.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170471",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
