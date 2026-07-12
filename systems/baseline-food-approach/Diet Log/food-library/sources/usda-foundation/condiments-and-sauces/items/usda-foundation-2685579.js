/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "racc",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-foundation-2685579",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "racc",
      "kind": "unit",
      "label": "RACC"
    }
  ],
  "name": "Tomato, sauce, canned, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 17.1,
    "carbs_g": 6.33,
    "energy_kcal": 29.1,
    "fat_g": 0.382,
    "fibre_g": 1.64,
    "folate_ug": 0.0,
    "iron_mg": 1.11,
    "magnesium_mg": 18.7,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.2,
    "potassium_mg": 356.0,
    "protein_g": 1.35,
    "salt_g": 1.0425,
    "sat_fat_g": 0.0,
    "sodium_mg": 417.0,
    "sugar_g": 3.52,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "2685579",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "condiments-and-sauces",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
