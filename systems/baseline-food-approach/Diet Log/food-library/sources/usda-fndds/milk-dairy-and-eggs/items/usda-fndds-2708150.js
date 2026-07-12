/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cheese-nip",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-cheese-nip",
      "kind": "unit",
      "label": "1 Cheese Nip"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 21.0,
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
      "gramsPerUnit": 3.0,
      "key": "1-cracker-nfs",
      "kind": "unit",
      "label": "1 cracker, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup-bite-size",
      "kind": "unit",
      "label": "1 cup, bite size"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-small-square-cracker",
      "kind": "unit",
      "label": "1 small square cracker"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-better-cheddars-cracker",
      "kind": "unit",
      "label": "1 Better Cheddars cracker"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    }
  ],
  "name": "Crackers, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 59.4,
    "energy_kcal": 489.0,
    "fat_g": 22.7,
    "fibre_g": 2.3,
    "folate_ug": 152.0,
    "iron_mg": 4.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 200.0,
    "potassium_mg": 156.0,
    "protein_g": 10.9,
    "salt_g": 2.4325,
    "sat_fat_g": 5.29,
    "sodium_mg": 973.0,
    "sugar_g": 4.53,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708150",
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
