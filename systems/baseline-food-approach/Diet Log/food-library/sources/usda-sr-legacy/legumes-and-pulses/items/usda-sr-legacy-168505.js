/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "10-beans",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "10-beans",
      "kind": "unit",
      "label": "10 beans"
    },
    {
      "gramsPerUnit": 262.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, green, canned, no salt added, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 4.32,
    "energy_kcal": 92.0,
    "fat_g": 0.46,
    "fibre_g": 1.9,
    "folate_ug": 28.0,
    "iron_mg": 1.06,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 96.0,
    "protein_g": 1.12,
    "salt_g": 0.005,
    "sat_fat_g": 0.103,
    "sodium_mg": 2.0,
    "sugar_g": 0.78,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 38.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168505",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
