/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "6-fl-oz",
      "kind": "unit",
      "label": "6 fl oz"
    }
  ],
  "name": "Tomato juice, canned, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 3.53,
    "energy_kcal": 17.0,
    "fat_g": 0.29,
    "fibre_g": 0.4,
    "folate_ug": 20.0,
    "iron_mg": 0.39,
    "magnesium_mg": 11.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 19.0,
    "potassium_mg": 217.0,
    "protein_g": 0.85,
    "salt_g": 0.6325,
    "sat_fat_g": 0.019,
    "sodium_mg": 253.0,
    "sugar_g": 2.58,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 70.1,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170458",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "beverages",
    "canned",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
