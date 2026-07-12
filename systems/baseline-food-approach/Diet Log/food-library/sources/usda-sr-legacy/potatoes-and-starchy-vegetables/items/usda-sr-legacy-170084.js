/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170084",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 196.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sweet potato, canned, syrup pack, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 25.4,
    "energy_kcal": 108.0,
    "fat_g": 0.32,
    "fibre_g": 3.0,
    "folate_ug": 8.0,
    "iron_mg": 0.95,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 193.0,
    "protein_g": 1.28,
    "salt_g": 0.0975,
    "sat_fat_g": 0.069,
    "sodium_mg": 39.0,
    "sugar_g": 5.74,
    "vitamin_a_ug": 458.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170084",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
