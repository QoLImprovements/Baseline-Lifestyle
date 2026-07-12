/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup-chopped-or-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170426",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    },
    {
      "gramsPerUnit": 73.0,
      "key": "pepper",
      "kind": "unit",
      "label": "pepper"
    }
  ],
  "name": "Peppers, hot chili, green, canned, pods, excluding seeds, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 5.1,
    "energy_kcal": 21.0,
    "fat_g": 0.1,
    "fibre_g": 1.3,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 187.0,
    "protein_g": 0.9,
    "salt_g": 2.925,
    "sat_fat_g": 0.01,
    "sodium_mg": 1170.0,
    "sugar_g": 3.12,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 68.0,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 8.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170426",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
