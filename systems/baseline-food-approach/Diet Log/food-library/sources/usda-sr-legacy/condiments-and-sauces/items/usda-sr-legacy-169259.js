/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "package-10-oz-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169259",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "package-10-oz-yields",
      "kind": "unit",
      "label": "package (10 oz) yields"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    }
  ],
  "name": "Mustard greens, frozen, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 3.11,
    "energy_kcal": 78.0,
    "fat_g": 0.25,
    "fibre_g": 2.8,
    "folate_ug": 70.0,
    "iron_mg": 1.12,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 139.0,
    "protein_g": 2.27,
    "salt_g": 0.0625,
    "sat_fat_g": 0.013,
    "sodium_mg": 25.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 354.0,
    "vitamin_c_mg": 13.8,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 335.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169259",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "condiments-and-sauces",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
