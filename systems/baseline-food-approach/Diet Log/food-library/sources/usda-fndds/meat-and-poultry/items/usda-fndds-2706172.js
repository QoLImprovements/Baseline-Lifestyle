/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Sausages",
  "id": "usda-fndds-2706172",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "1-link",
      "kind": "unit",
      "label": "1 link"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "1-cup-nfs",
      "kind": "unit",
      "label": "1 cup, NFS"
    }
  ],
  "name": "Beef sausage with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 3.75,
    "energy_kcal": 341.0,
    "fat_g": 28.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.47,
    "magnesium_mg": 21.0,
    "omega3_g": 0.013,
    "phosphorus_mg": 176.0,
    "potassium_mg": 257.0,
    "protein_g": 13.6,
    "salt_g": 2.305,
    "sat_fat_g": 11.7,
    "sodium_mg": 922.0,
    "sugar_g": 1.37,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 16.4,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706172",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "meat-and-poultry",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
