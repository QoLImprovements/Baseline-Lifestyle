/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-33-cup",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172772",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 52.0,
      "key": "0-33-cup",
      "kind": "unit",
      "label": "0.33 cup"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-poured-from-box",
      "kind": "unit",
      "label": "cup, poured from box"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pancakes, plain, dry mix, complete (includes buttermilk)",
  "nutritionPerBasis": {
    "calcium_mg": 344.0,
    "carbs_g": 73.6,
    "energy_kcal": 368.0,
    "fat_g": 3.1,
    "fibre_g": 2.9,
    "folate_ug": 0.0,
    "iron_mg": 3.6,
    "magnesium_mg": 28.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 600.0,
    "potassium_mg": 191.0,
    "protein_g": 9.77,
    "salt_g": 2.7,
    "sat_fat_g": 0.822,
    "sodium_mg": 1080.0,
    "sugar_g": 16.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172772",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
