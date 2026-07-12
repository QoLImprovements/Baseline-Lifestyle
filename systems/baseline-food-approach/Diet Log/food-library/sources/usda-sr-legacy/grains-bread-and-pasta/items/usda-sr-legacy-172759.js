/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "doughnut-oval-3-1-2-x-2-1-2",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "doughnut-oval-3-1-2-x-2-1-2",
      "kind": "unit",
      "label": "doughnut oval (3-1/2\" x 2-1/2\")"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Doughnuts, yeast-leavened, with jelly filling",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 39.0,
    "energy_kcal": 1420.0,
    "fat_g": 18.7,
    "fibre_g": 0.9,
    "folate_ug": 68.0,
    "iron_mg": 1.76,
    "magnesium_mg": 20.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 85.0,
    "potassium_mg": 79.0,
    "protein_g": 5.9,
    "salt_g": 1.1375,
    "sat_fat_g": 4.84,
    "sodium_mg": 455.0,
    "sugar_g": 21.1,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172759",
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
