/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-cup-nfs",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708185",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-big-cracker",
      "kind": "unit",
      "label": "1 Big cracker"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-snack-stick",
      "kind": "unit",
      "label": "1 snack stick"
    }
  ],
  "name": "Crackers, wheat, plain (Wheat Thins)",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 70.1,
    "energy_kcal": 441.0,
    "fat_g": 15.3,
    "fibre_g": 8.6,
    "folate_ug": 33.0,
    "iron_mg": 2.99,
    "magnesium_mg": 91.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 316.0,
    "potassium_mg": 314.0,
    "protein_g": 8.94,
    "salt_g": 1.875,
    "sat_fat_g": 2.64,
    "sodium_mg": 750.0,
    "sugar_g": 8.34,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 20.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708185",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
