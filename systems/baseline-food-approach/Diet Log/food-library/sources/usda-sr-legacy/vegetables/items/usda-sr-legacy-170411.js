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
  "id": "usda-sr-legacy-170411",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "0-5-cup-chopped-or-diced",
      "kind": "unit",
      "label": "0.5 cup, chopped or diced"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    }
  ],
  "name": "Onions, frozen, chopped, cooked, boiled, drained, without salt",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 6.59,
    "energy_kcal": 28.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 13.0,
    "iron_mg": 0.3,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 108.0,
    "protein_g": 0.77,
    "salt_g": 0.03,
    "sat_fat_g": 0.016,
    "sodium_mg": 12.0,
    "sugar_g": 2.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170411",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
