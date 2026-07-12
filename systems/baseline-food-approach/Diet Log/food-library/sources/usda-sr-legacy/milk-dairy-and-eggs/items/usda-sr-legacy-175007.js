/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-poured-from-box",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 112.0,
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
  "name": "Pancakes, plain, dry mix, incomplete (includes buttermilk)",
  "nutritionPerBasis": {
    "calcium_mg": 342.0,
    "carbs_g": 73.6,
    "energy_kcal": 1480.0,
    "fat_g": 1.7,
    "fibre_g": 5.4,
    "folate_ug": 136.0,
    "iron_mg": 3.05,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 627.0,
    "potassium_mg": 191.0,
    "protein_g": 10.0,
    "salt_g": 2.875,
    "sat_fat_g": 0.25,
    "sodium_mg": 1150.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175007",
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
