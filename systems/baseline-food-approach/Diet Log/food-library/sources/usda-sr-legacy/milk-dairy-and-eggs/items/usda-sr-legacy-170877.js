/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "0-25-cup",
      "kind": "unit",
      "label": "0.25 cup"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "5-tbsp",
      "kind": "unit",
      "label": "5 tbsp"
    }
  ],
  "name": "Milk, dry, nonfat, regular, without added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 1260.0,
    "carbs_g": 52.0,
    "energy_kcal": 362.0,
    "fat_g": 0.77,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 0.32,
    "magnesium_mg": 110.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 968.0,
    "potassium_mg": 1790.0,
    "protein_g": 36.2,
    "salt_g": 1.3375,
    "sat_fat_g": 0.499,
    "sodium_mg": 535.0,
    "sugar_g": 52.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170877",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
