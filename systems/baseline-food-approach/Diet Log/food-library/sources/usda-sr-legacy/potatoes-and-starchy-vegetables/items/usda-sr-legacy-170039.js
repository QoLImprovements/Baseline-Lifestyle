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
  "id": "usda-sr-legacy-170039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, dehydrated, granules without milk, dry form",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 85.5,
    "energy_kcal": 372.0,
    "fat_g": 0.54,
    "fibre_g": 7.1,
    "folate_ug": 40.0,
    "iron_mg": 1.09,
    "magnesium_mg": 98.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 245.0,
    "potassium_mg": 703.0,
    "protein_g": 8.22,
    "salt_g": 0.1675,
    "sat_fat_g": 0.138,
    "sodium_mg": 67.0,
    "sugar_g": 3.47,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 9.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170039",
  "state": "Mashed",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "mashed",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
