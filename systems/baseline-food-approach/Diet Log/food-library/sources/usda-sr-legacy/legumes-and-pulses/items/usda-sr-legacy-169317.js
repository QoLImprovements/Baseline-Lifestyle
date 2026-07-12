/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169317",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, immature seeds, canned, no salt added, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 13.3,
    "energy_kcal": 297.0,
    "fat_g": 0.29,
    "fibre_g": 3.6,
    "folate_ug": 16.0,
    "iron_mg": 1.61,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 285.0,
    "protein_g": 4.07,
    "salt_g": 0.01,
    "sat_fat_g": 0.066,
    "sodium_mg": 4.0,
    "sugar_g": 0.93,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169317",
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
