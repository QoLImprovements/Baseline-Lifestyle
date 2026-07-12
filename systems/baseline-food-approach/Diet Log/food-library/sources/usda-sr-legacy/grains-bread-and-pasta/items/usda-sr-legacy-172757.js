/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172757",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "doughnut-oval-3-1-2-x-2-1-2",
      "kind": "unit",
      "label": "doughnut oval (3-1/2\" x 2-1/2\")"
    }
  ],
  "name": "Doughnuts, yeast-leavened, with creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 30.0,
    "energy_kcal": 1510.0,
    "fat_g": 24.5,
    "fibre_g": 0.8,
    "folate_ug": 70.0,
    "iron_mg": 1.83,
    "magnesium_mg": 20.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 76.0,
    "potassium_mg": 80.0,
    "protein_g": 6.4,
    "salt_g": 0.7725,
    "sat_fat_g": 5.43,
    "sodium_mg": 309.0,
    "sugar_g": 14.6,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172757",
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
