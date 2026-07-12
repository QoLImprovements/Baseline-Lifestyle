/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "muffin",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174995",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "muffin",
      "kind": "unit",
      "label": "muffin"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, English, plain, toasted, enriched, with calcium propionate (includes sourdough)",
  "nutritionPerBasis": {
    "calcium_mg": 197.0,
    "carbs_g": 52.6,
    "energy_kcal": 1130.0,
    "fat_g": 2.02,
    "fibre_g": 2.8,
    "folate_ug": 119.0,
    "iron_mg": 4.65,
    "magnesium_mg": 28.0,
    "omega3_g": 0.089,
    "phosphorus_mg": 107.0,
    "potassium_mg": 129.0,
    "protein_g": 10.3,
    "salt_g": 1.1925,
    "sat_fat_g": 0.533,
    "sodium_mg": 477.0,
    "sugar_g": 3.47,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174995",
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
