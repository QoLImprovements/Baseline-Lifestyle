/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-173134",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Honey Nut Oat Bar",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 55.1,
    "energy_kcal": 1600.0,
    "fat_g": 7.87,
    "fibre_g": 11.0,
    "folate_ug": 905.0,
    "iron_mg": 18.2,
    "magnesium_mg": 317.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 22.5,
    "salt_g": 0.795,
    "sat_fat_g": 4.48,
    "sodium_mg": 318.0,
    "sugar_g": 26.3,
    "vitamin_a_ug": 4450.0,
    "vitamin_c_mg": 176.0,
    "vitamin_e_mg": 30.5,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173134",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "grains-bread-and-pasta",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
