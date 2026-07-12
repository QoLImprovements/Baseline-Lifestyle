/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "0-5-cup-mashed",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "0-5-cup-mashed",
      "kind": "unit",
      "label": "0.5 cup, mashed"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "medium-2-dia-5-long-raw",
      "kind": "unit",
      "label": "medium (2\" dia, 5\" long, raw)"
    }
  ],
  "name": "Sweet potato, cooked, baked in skin, flesh, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 20.7,
    "energy_kcal": 378.0,
    "fat_g": 0.15,
    "fibre_g": 3.3,
    "folate_ug": 6.0,
    "iron_mg": 0.69,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 475.0,
    "protein_g": 2.01,
    "salt_g": 0.615,
    "sat_fat_g": 0.052,
    "sodium_mg": 246.0,
    "sugar_g": 6.48,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 19.6,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170134",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
