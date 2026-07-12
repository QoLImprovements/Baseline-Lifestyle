/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-5-cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    },
    {
      "gramsPerUnit": 313.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    }
  ],
  "name": "Peas, green, canned, no salt added, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 12.6,
    "energy_kcal": 289.0,
    "fat_g": 0.35,
    "fibre_g": 4.1,
    "folate_ug": 44.0,
    "iron_mg": 0.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 173.0,
    "protein_g": 4.42,
    "salt_g": 0.005,
    "sat_fat_g": 0.062,
    "sodium_mg": 2.0,
    "sugar_g": 4.16,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 21.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170104",
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
