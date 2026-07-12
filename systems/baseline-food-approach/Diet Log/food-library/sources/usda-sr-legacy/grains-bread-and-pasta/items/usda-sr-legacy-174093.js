/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "muffin-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174093",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "muffin-1-serving",
      "kind": "unit",
      "label": "muffin 1 serving"
    }
  ],
  "name": "English muffins, whole grain white",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 50.2,
    "energy_kcal": 1020.0,
    "fat_g": 1.75,
    "fibre_g": 3.5,
    "folate_ug": 70.0,
    "iron_mg": 2.53,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 127.0,
    "potassium_mg": 130.0,
    "protein_g": 7.02,
    "salt_g": 0.965,
    "sat_fat_g": 0.0,
    "sodium_mg": 386.0,
    "sugar_g": 1.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174093",
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
