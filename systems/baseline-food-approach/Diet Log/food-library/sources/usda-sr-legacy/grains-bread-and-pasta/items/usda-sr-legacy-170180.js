/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Nut and Seed Products",
  "id": "usda-sr-legacy-170180",
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
    }
  ],
  "name": "Nuts, formulated, wheat-based, unflavored, with salt added",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 23.7,
    "energy_kcal": 2600.0,
    "fat_g": 57.7,
    "fibre_g": 5.2,
    "folate_ug": 142.0,
    "iron_mg": 2.4,
    "magnesium_mg": 58.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 371.0,
    "potassium_mg": 318.0,
    "protein_g": 13.8,
    "salt_g": 1.2625,
    "sat_fat_g": 8.7,
    "sodium_mg": 505.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170180",
  "state": "Unspecified",
  "subcategory": "Nut and Seed Products",
  "tags": [
    "grains-bread-and-pasta",
    "nut-and-seed-products",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
