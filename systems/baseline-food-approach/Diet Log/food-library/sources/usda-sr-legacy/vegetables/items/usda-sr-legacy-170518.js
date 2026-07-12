/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pokeberry shoots, (poke), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 3.1,
    "energy_kcal": 84.0,
    "fat_g": 0.4,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 1.2,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 184.0,
    "protein_g": 2.3,
    "salt_g": 0.635,
    "sat_fat_g": 0.0,
    "sodium_mg": 254.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 435.0,
    "vitamin_c_mg": 82.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 108.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170518",
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
