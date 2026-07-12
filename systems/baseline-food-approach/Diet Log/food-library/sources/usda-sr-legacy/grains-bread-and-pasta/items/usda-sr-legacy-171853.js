/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-25-cup-mix-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171853",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "0-25-cup-mix-1-serving",
      "kind": "unit",
      "label": "0.25 cup mix 1 serving"
    }
  ],
  "name": "Pancakes, whole wheat, dry mix, incomplete",
  "nutritionPerBasis": {
    "calcium_mg": 158.0,
    "carbs_g": 74.1,
    "energy_kcal": 1470.0,
    "fat_g": 1.32,
    "fibre_g": 7.9,
    "folate_ug": 84.0,
    "iron_mg": 7.11,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 789.0,
    "potassium_mg": 368.0,
    "protein_g": 10.5,
    "salt_g": 4.075,
    "sat_fat_g": 0.0,
    "sodium_mg": 1630.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 1.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171853",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
