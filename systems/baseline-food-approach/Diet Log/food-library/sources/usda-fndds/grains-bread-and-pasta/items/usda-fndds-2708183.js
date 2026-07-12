/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Crackers, excludes saltines",
  "id": "usda-fndds-2708183",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-cracker",
      "kind": "unit",
      "label": "1 cracker"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-small-or-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 small or medium single serving bag"
    }
  ],
  "name": "Crackers, woven wheat, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 75.5,
    "energy_kcal": 416.0,
    "fat_g": 7.59,
    "fibre_g": 10.9,
    "folate_ug": 30.0,
    "iron_mg": 3.56,
    "magnesium_mg": 120.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 364.0,
    "potassium_mg": 373.0,
    "protein_g": 11.3,
    "salt_g": 1.8625,
    "sat_fat_g": 1.07,
    "sodium_mg": 745.0,
    "sugar_g": 1.22,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 12.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708183",
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
