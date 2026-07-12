/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "pepper",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170497",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    }
  ],
  "name": "Peppers, hot chili, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 9.46,
    "energy_kcal": 167.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 1.2,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 340.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 0.021,
    "sodium_mg": 7.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 242.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 14.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170497",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
