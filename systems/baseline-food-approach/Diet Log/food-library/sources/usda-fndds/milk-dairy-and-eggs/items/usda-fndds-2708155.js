/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup-nfs",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708155",
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
      "gramsPerUnit": 3.0,
      "key": "1-cracker-nfs",
      "kind": "unit",
      "label": "1 cracker, NFS"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-small-square-cracker",
      "kind": "unit",
      "label": "1 small square cracker"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-kashi-tlc-cracker",
      "kind": "unit",
      "label": "1 Kashi TLC cracker"
    },
    {
      "gramsPerUnit": 24.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup-bite-size",
      "kind": "unit",
      "label": "1 cup, bite size"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    }
  ],
  "name": "Crackers, cheese, whole grain",
  "nutritionPerBasis": {
    "calcium_mg": 128.0,
    "carbs_g": 57.3,
    "energy_kcal": 412.0,
    "fat_g": 16.0,
    "fibre_g": 6.4,
    "folate_ug": 103.0,
    "iron_mg": 3.46,
    "magnesium_mg": 68.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 264.0,
    "potassium_mg": 212.0,
    "protein_g": 9.62,
    "salt_g": 1.765,
    "sat_fat_g": 3.21,
    "sodium_mg": 706.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 3.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708155",
  "state": "Unspecified",
  "subcategory": "Crackers, excludes saltines",
  "tags": [
    "crackers-excludes-saltines",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
