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
  "id": "usda-sr-legacy-170445",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Potatoes, mashed, dehydrated, flakes without milk, dry form",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 81.2,
    "energy_kcal": 354.0,
    "fat_g": 0.41,
    "fibre_g": 6.6,
    "folate_ug": 46.0,
    "iron_mg": 1.21,
    "magnesium_mg": 66.0,
    "omega3_g": 0.023,
    "phosphorus_mg": 156.0,
    "potassium_mg": 1100.0,
    "protein_g": 8.34,
    "salt_g": 0.1925,
    "sat_fat_g": 0.169,
    "sodium_mg": 77.0,
    "sugar_g": 3.36,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 81.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170445",
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
