/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "wafer",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "wafer",
      "kind": "unit",
      "label": "wafer"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "crispbread",
      "kind": "unit",
      "label": "crispbread"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "crispbread-wasa-rye",
      "kind": "unit",
      "label": "crispbread, Wasa rye"
    },
    {
      "gramsPerUnit": 5.8,
      "key": "cracker-norwegian-flatbread-4-3-4-x-2-3-4-x-1-16",
      "kind": "unit",
      "label": "cracker, Norwegian flatbread (4-3/4\" x 2-3/4\" x 1/16\")"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "wafer-rye-krisp-triple-cracker",
      "kind": "unit",
      "label": "wafer, Rye Krisp (triple cracker)"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "wafer-thin",
      "kind": "unit",
      "label": "wafer, thin"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, crispbread, rye",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 82.2,
    "energy_kcal": 1530.0,
    "fat_g": 1.3,
    "fibre_g": 16.5,
    "folate_ug": 47.0,
    "iron_mg": 2.43,
    "magnesium_mg": 78.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 269.0,
    "potassium_mg": 319.0,
    "protein_g": 7.9,
    "salt_g": 1.025,
    "sat_fat_g": 0.145,
    "sodium_mg": 410.0,
    "sugar_g": 1.07,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172739",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
