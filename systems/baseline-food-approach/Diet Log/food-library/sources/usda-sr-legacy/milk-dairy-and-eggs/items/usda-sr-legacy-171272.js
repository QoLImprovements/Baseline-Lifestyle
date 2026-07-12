/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-33-cup-makes-1-cup-reconstituted-milk",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171272",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "0-33-cup-makes-1-cup-reconstituted-milk",
      "kind": "unit",
      "label": "0.33 cup (makes 1 cup reconstituted milk)"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "envelope-1-1-3-cup",
      "kind": "unit",
      "label": "envelope (1-1/3 cup)"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Milk, dry, nonfat, instant, with added vitamin A and vitamin D",
  "nutritionPerBasis": {
    "calcium_mg": 1230.0,
    "carbs_g": 52.2,
    "energy_kcal": 358.0,
    "fat_g": 0.72,
    "fibre_g": 0.0,
    "folate_ug": 50.0,
    "iron_mg": 0.31,
    "magnesium_mg": 117.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 985.0,
    "potassium_mg": 1700.0,
    "protein_g": 35.1,
    "salt_g": 1.3725,
    "sat_fat_g": 0.467,
    "sodium_mg": 549.0,
    "sugar_g": 52.2,
    "vitamin_a_ug": 709.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171272",
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
