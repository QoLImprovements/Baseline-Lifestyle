/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "muffin-toaster",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175046",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "muffin-toaster",
      "kind": "unit",
      "label": "muffin, toaster"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Muffins, wheat bran, toaster-type with raisins, toasted",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 55.5,
    "energy_kcal": 1310.0,
    "fat_g": 9.4,
    "fibre_g": 8.2,
    "folate_ug": 30.0,
    "iron_mg": 2.83,
    "magnesium_mg": 21.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 284.0,
    "potassium_mg": 177.0,
    "protein_g": 5.5,
    "salt_g": 1.3175,
    "sat_fat_g": 1.5,
    "sodium_mg": 527.0,
    "sugar_g": 23.1,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 17.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175046",
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
