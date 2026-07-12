/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-8-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174867",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 265.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, Malted drink mix, chocolate, powder, prepared with whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 11.2,
    "energy_kcal": 357.0,
    "fat_g": 3.29,
    "fibre_g": 0.5,
    "folate_ug": 9.0,
    "iron_mg": 0.21,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 91.0,
    "potassium_mg": 172.0,
    "protein_g": 3.37,
    "salt_g": 0.15,
    "sat_fat_g": 1.88,
    "sodium_mg": 60.0,
    "sugar_g": 6.68,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174867",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
