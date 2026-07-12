/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-cubes",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    }
  ],
  "name": "Waxgourd, (chinese preserving melon), cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 2.45,
    "energy_kcal": 48.0,
    "fat_g": 0.2,
    "fibre_g": 1.0,
    "folate_ug": 4.0,
    "iron_mg": 0.38,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 5.0,
    "protein_g": 0.4,
    "salt_g": 0.8575,
    "sat_fat_g": 0.016,
    "sodium_mg": 343.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 10.5,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170549",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "fruit",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
