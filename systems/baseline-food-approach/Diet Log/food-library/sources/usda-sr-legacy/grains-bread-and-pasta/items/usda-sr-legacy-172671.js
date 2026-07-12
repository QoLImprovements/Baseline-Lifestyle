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
  "id": "usda-sr-legacy-172671",
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
      "gramsPerUnit": 44.0,
      "key": "biscuit-2-1-2-dia",
      "kind": "unit",
      "label": "biscuit (2-1/2\" dia)"
    }
  ],
  "name": "Biscuits, mixed grain, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 47.4,
    "energy_kcal": 1100.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 83.0,
    "iron_mg": 2.75,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 236.0,
    "potassium_mg": 456.0,
    "protein_g": 6.1,
    "salt_g": 1.675,
    "sat_fat_g": 1.37,
    "sodium_mg": 670.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172671",
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
