/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-miniature-bite-size",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-miniature-bite-size",
      "kind": "unit",
      "label": "1 miniature/bite size"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup-bite-size",
      "kind": "unit",
      "label": "1 cup, bite size"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-cracker-nfs",
      "kind": "unit",
      "label": "1 cracker, NFS"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-small-square-cracker",
      "kind": "unit",
      "label": "1 small square cracker"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "1-cheese-nip",
      "kind": "unit",
      "label": "1 Cheese Nip"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    }
  ],
  "name": "Crackers, cheese, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 68.2,
    "energy_kcal": 418.0,
    "fat_g": 11.7,
    "fibre_g": 3.3,
    "folate_ug": 228.0,
    "iron_mg": 4.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 162.0,
    "potassium_mg": 141.0,
    "protein_g": 10.0,
    "salt_g": 2.925,
    "sat_fat_g": 3.33,
    "sodium_mg": 1170.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.88,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708153",
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
