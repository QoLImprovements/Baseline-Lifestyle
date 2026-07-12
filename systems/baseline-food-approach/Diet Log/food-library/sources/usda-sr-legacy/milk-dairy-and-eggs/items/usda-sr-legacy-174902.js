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
  "id": "usda-sr-legacy-174902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "cup-poured-from-box",
      "kind": "unit",
      "label": "cup, poured from box"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-spooned-into-cup",
      "kind": "unit",
      "label": "cup, spooned into cup"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "cup-homemade",
      "kind": "unit",
      "label": "cup, homemade"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-purchased",
      "kind": "unit",
      "label": "cup, purchased"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "0-33-cup-nlea-serving-size",
      "kind": "unit",
      "label": "0.33 cup (NLEA serving size)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Biscuits, plain or buttermilk, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 179.0,
    "carbs_g": 63.4,
    "energy_kcal": 1790.0,
    "fat_g": 15.4,
    "fibre_g": 2.1,
    "folate_ug": 125.0,
    "iron_mg": 2.77,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 585.0,
    "potassium_mg": 163.0,
    "protein_g": 8.0,
    "salt_g": 3.2,
    "sat_fat_g": 3.96,
    "sodium_mg": 1280.0,
    "sugar_g": 11.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 6.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174902",
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
